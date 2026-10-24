const {test}=require('node:test');
const assert=require('node:assert/strict');
const M=require('../assets/inquiry-model.js');
test('原探究單 A/B/C/D 的比值與整體濃度',()=>{
  [[1,2,.5,1/3],[1,4,.25,.2],[1,5,.2,1/6],[1,1,1,.5]].forEach(([j,w,r,c])=>{
    const m=M.mixture(j,w);assert.equal(m.ratio,r);assert.equal(m.concentration,c);assert.equal(m.total,j+w);
  });
});
test('固定果汁時加水降低比值與濃度；放大配方不改變濃度',()=>{
  for(let j=1;j<=5;j++) for(let w=1;w<10;w++) {
    assert.ok(M.mixture(j,w+1).concentration<M.mixture(j,w).concentration);
    assert.ok(M.mixture(j,w+1).ratio<M.mixture(j,w).ratio);
  }
  for(let k=1;k<=5;k++) assert.deepEqual([M.mixture(k,4*k).ratio,M.mixture(k,4*k).concentration],[.25,.2]);
});
test('零水時比值未定義；拒絕空杯、負數與非有限數',()=>{
  assert.equal(M.mixture(1,0).ratio,null);assert.equal(M.mixture(1,0).concentration,1);
  [[0,0],[-1,2],[1,-1],[NaN,2],[1,Infinity]].forEach(p=>assert.throws(()=>M.mixture(...p),RangeError));
});
test('遷移題：檸檬紅茶與 25% 的部分比部分',()=>{
  assert.ok(M.mixture(2,8).concentration>M.mixture(3,15).concentration);
  assert.deepEqual(M.fromPercent(25),[1,3]);assert.deepEqual(M.fromPercent(50),[1,1]);
  assert.throws(()=>M.fromPercent(0),RangeError);
});
test('15 公升調配需要 4 瓶，保留單位與進位',()=>{
  assert.deepEqual(M.allocation(15000,1,4,800),{parts:5,perPart:3000,juiceMl:3000,waterMl:12000,bottles:4,leftover:200});
  assert.equal(M.allocation(16000,1,4,800).bottles,4);
});
