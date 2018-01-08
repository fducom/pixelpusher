import {fromJS} from 'immutable'
import Project from '../records/Project'
import Palette from '../records/Palette'
import Pixel from '../records/Pixel'
import Frame from '../records/Frame'

export const deserializeProject = json =>
  Project({
    id: json.id,
    rows: json.rows,
    columns: json.columns,
    cellSize: json.cellSize,
    frames: deserializeFrames(json.frames),
    palette: deserializePalette(json.palette),
    defaultColor: json.defaultColor,
  })

export const deserializeFrames = json =>
  fromJS(json.map(deserializeFrame))

export const deserializeFrame = json =>
  Frame({
    id: json.id,
    pixels: fromJS(json.pixels),
    interval: json.interval,
  })

export const deserializePalette = json =>
  fromJS(json.map(deserializePixel))

export const deserializePixel = json =>
  Pixel(json)
