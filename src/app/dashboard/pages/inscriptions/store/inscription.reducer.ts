
import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { IncriptionWhithAlumnAndFolder } from '../models';
import { Alumns } from '../../alumns/models';
import { category } from '../../folders/models';

export const inscriptionFeatureKey = 'inscription';

export interface State {

  data: IncriptionWhithAlumnAndFolder[];
  alumnsOption: Alumns[];
  categoryOptions: category [];
  loading: boolean;
  error: unknown;
}


export const initialState: State = {

  data: [],
  alumnsOption: [],
  categoryOptions: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,


  on(InscriptionActions.loadInscriptions, state => {

    return {
      ...state,
      loading:true
    }
  }),



  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => {
    return{

      ...state,

      data: action.data,
      loading: false
    }
  }),



  on(InscriptionActions.loadInscriptionsFailure, (state, action) => state),
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

