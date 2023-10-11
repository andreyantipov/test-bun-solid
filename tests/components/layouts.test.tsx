/// <reference lib="dom" />

import { expect, test } from 'bun:test'
import { SmallLayout, MediumLayout, LargeLayout } from '~/components/layouts'

test('SmallLayout', () => {
  expect(SmallLayout).not.toBeUndefined()
})

test('MediumLayout', () => {
  expect(MediumLayout).not.toBeUndefined()
})

test('LargeLayout', () => {
  expect(LargeLayout).not.toBeUndefined()
})
