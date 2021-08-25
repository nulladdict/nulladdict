/// <reference types="@sveltejs/kit" />

interface PaintRenderingContext2D
  extends CanvasCompositing,
    CanvasDrawImage,
    CanvasDrawPath,
    CanvasFillStrokeStyles,
    CanvasImageSmoothing,
    CanvasPath,
    CanvasPathDrawingStyles,
    CanvasRect,
    CanvasShadowStyles,
    CanvasState,
    CanvasTransform {}

interface PaintSize {
  readonly width: number;
  readonly height: number;
}
