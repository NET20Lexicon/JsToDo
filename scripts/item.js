class item {
  constructor(text, checked) {
    this.checked = checked;
    this.text = text;
  }

  getChecked() {
    return this.checked ? true : false;
  }
}

export { item };
