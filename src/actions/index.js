const menuChanged = (newMenu) => {
  return {
    type: 'MENU_ACTION',
    payload: newMenu,
  }
}

export {
  menuChanged,
}