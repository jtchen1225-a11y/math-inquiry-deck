/* Pure mathematical model. The same implementation is used in the browser and tests. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.InquiryModel = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function mixture(juice, water) {
    if (!Number.isFinite(juice) || !Number.isFinite(water) || juice < 0 || water < 0 || juice + water <= 0)
      throw new RangeError('份數須為非負有限數，總份數須大於零');
    return { juice, water, total: juice + water, ratio: water === 0 ? null : juice / water,
      concentration: juice / (juice + water) };
  }
  function allocation(total, juice, water, bottle) {
    if (![total, bottle].every(n => Number.isFinite(n) && n > 0)) throw new RangeError('容量須大於零');
    const mix = mixture(juice, water);
    const juiceMl = total * mix.concentration;
    return { parts: mix.total, perPart: total / mix.total, juiceMl, waterMl: total - juiceMl,
      bottles: Math.ceil(juiceMl / bottle), leftover: Math.ceil(juiceMl / bottle) * bottle - juiceMl };
  }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function fromPercent(p) {
    if (!Number.isInteger(p) || p <= 0 || p >= 100) throw new RangeError('請輸入 1 至 99 的整數百分比');
    const d = gcd(p, 100 - p); return [p / d, (100 - p) / d];
  }
  return { mixture, allocation, fromPercent };
});
