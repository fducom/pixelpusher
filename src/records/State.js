import {Record, List, Map} from 'immutable'

export const DEFAULT_COLOR = '#313131';

const State = Record({
  currentProjectId: null,
  focusedProjectId: null,
  projects: Map(),
  identityId: null,
  peers: Map(),
  identities: Map(),
  currentSwatchIndex: 0,
  eraserOn: false,
  eyedropperOn: false,
  colorPickerOn: false,
  bucketOn: false,
  loading: false,
  createdProjectCount: 0,
  mergePreviewProjectId: null,
  mergingProjectId: null,
  notifications: List(),
  activeFrameIndex: 0,
  duration: 1,
  cloudPeers: Map(),
  archiverKey: null
}, 'State')

export default State
