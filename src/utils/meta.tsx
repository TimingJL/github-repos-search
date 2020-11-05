import update from "immutability-helper";

export const LOADED = 'isLoaded';
export const LOADING = 'isLoading';
export const ERROR = 'error';

export const updateMetaLoading = (meta) => update(meta, {
  [LOADING]: { $set: true },
  [LOADED]: { $set: false },
  [ERROR]: { $set: null },
})

export const updateMetaDone = (meta) => update(meta, {
  [LOADING]: { $set: false },
  [LOADED]: { $set: true },
  [ERROR]: { $set: null },
})

export const updateMetaError = (meta, error) => update(meta, {
  [LOADING]: { $set: false },
  [LOADED]: { $set: false },
  [ERROR]: { $set: error.message },
})

export default {
  [LOADING]: false,
  [LOADED]: false,
  [ERROR]: null,
};
