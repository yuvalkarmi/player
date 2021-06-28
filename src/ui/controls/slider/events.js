import { VdsCustomEvent } from '../../../foundation/events/index.js';

/**
 * @typedef {{
 *  [SliderValueChangeEvent.TYPE]: SliderValueChangeEvent;
 *  [SliderDragStartEvent.TYPE]: SliderDragStartEvent;
 *  [SliderDragEndEvent.TYPE]: SliderDragEndEvent;
 * }} SliderEvents
 */

/**
 * @template DetailType
 * @extends {VdsCustomEvent<DetailType>}
 */
export class SliderEvent extends VdsCustomEvent {}

/**
 * Fired when the slider value changes.
 *
 * @extends {SliderEvent<number>}
 */
export class SliderValueChangeEvent extends SliderEvent {
  /** @readonly */
  static TYPE = 'vds-slider-value-change';
}

/**
 * Fired when the user begins interacting with the slider and dragging the thumb.
 *
 * @extends {SliderEvent<number>}
 */
export class SliderDragStartEvent extends SliderEvent {
  /** @readonly */
  static TYPE = 'vds-slider-drag-start';
}

/**
 * Fired when the user stops dragging the slider thumb.
 *
 * @extends {SliderEvent<number>}
 */
export class SliderDragEndEvent extends SliderEvent {
  /** @readonly */
  static TYPE = 'vds-slider-drag-end';
}
