class PolkaWorklet {
  /**
   * @param {PaintRenderingContext2D} ctx
   * @param {PaintSize} size
   * @param {StylePropertyMapReadOnly} styleMap
   */
  // @ts-ignore
  paint(ctx, size, styleMap) {}
}

// @ts-ignore
registerPaint("polka", PolkaWorklet);
