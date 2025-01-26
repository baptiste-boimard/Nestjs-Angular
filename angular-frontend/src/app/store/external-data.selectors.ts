import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ExternalDataState } from './external-data.reducer';

export const selectExternalDataState = createFeatureSelector<ExternalDataState>('externalData');

export const selectExternalData = createSelector(
  selectExternalDataState,
  (state: ExternalDataState) => state.datas
);

export const selectServiceBData = createSelector(
    selectExternalDataState,
    (state: ExternalDataState) => state.serviceBDatas
);
