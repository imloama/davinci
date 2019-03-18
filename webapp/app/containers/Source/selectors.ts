/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { createSelector } from 'reselect'

const selectSource = (state) => state.get('source')

const makeSelectSources = () => createSelector(
  selectSource,
  (sourceState) => sourceState.get('sources')
)

const makeSelectListLoading = () => createSelector(
  selectSource,
  (sourceState) => sourceState.get('listLoading')
)

const makeSelectFormLoading = () => createSelector(
  selectSource,
  (sourceState) => sourceState.get('formLoading')
)

const makeSelectTestLoading = () => createSelector(
  selectSource,
  (sourceState) => sourceState.get('testLoading')
)

const makeSelectSourceFormValues = () => createSelector(
  selectSource,
  (sourceState) => sourceState.get('sourceFormValues')
)

const makeSelectUploadFormValues = () => createSelector(
  selectSource,
  (sourceState) => sourceState.get('uploadFormValues')
)

export {
  selectSource,
  makeSelectSources,
  makeSelectListLoading,
  makeSelectFormLoading,
  makeSelectTestLoading,
  makeSelectSourceFormValues,
  makeSelectUploadFormValues
}
