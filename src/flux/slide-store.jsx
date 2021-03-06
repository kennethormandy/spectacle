export default class SlideStore {
  constructor() {
    this.bindActions(this.alt.getActions("SlideActions"));
    this.fragments = {};
  }

  onAddFragment(payload) {
    let fragments = this.fragments;
    let fid = 'f' + payload.id;
    if (!fragments.hasOwnProperty(payload.slide)) {
      fragments[payload.slide] = {};
      fragments[payload.slide][fid] = payload;
    } else {
      let slide = fragments[payload.slide];
      if (!slide.hasOwnProperty(fid)) {
        slide[fid] = payload;
      }
    }
    this.setState({
      fragments: fragments
    });
  }
  onUpdateFragment(payload) {
    let fragments = this.fragments;
    fragments[payload.fragment.slide]['f' + payload.fragment.id].visible = payload.visible;
    this.setState({
      fragments: fragments
    });
  }
}
