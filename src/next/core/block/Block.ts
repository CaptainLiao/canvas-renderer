import Node from '../Node'

const enum FILL_RULE {
  nonzero = 'nonzero',
  evenodd = 'evenodd'
}

export default class Block extends Node {
  protected width: number;
  protected height: number;

  protected backgroundColor: string;
  protected padding = [0, 0, 0, 0];
  protected borderWidth = 1;
  protected borderColor = '#000000';
  protected borderStyle = 'solid';
}