import { writable } from 'svelte/store';

const store = writable({});

export function fxFlex(node, grid) {
  console.log(grid);
}

export function fxLayoutAlign(node, grid) {
  console.log('fxLayoutAlign');
}
