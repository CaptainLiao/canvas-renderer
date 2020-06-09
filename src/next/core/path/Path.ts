import Node from '../Node'

const enum FILL_RULE {
  nonzero = 'nonzero',
  evenodd = 'evenodd'
}

export default class Path extends Node {
  protected fillStyle = '#000000';
  protected fillRule: FILL_RULE = FILL_RULE.nonzero;

  protected strokeStyle;
  protected lineWidth = 1;
  protected lineJoin = 'miter';
  protected lineCap = 'butt';
}