import {
  NEW_NOTE,
  TOGGLE_FAVORITE,
  DELETE_NOTE,
  TOGGLE_LIST_SHOW,
  UPDATE_NOTE,
  SET_CURRENT_ACTIVE_NOTE
} from './mutation-types';

export default {
  //新增笔记
  [NEW_NOTE](state, data = { newNote: {
    id: +new Date(),
    title: '',
    content: '',
    favorite: false
  } }) {
    state.notes.push(data.newNote);
    state.activeNote = data.newNote;
  },

  // 切换笔记的收藏与取消收藏
  [TOGGLE_FAVORITE](state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  // 删除笔记
  [DELETE_NOTE](state) {
    for (let i = 0; i < state.notes.length; i++) {
      if (state.notes[i].id === state.activeNote.id) {
        state.notes.splice(i, 1);
        state.activeNote = state.notes[0] || {};
        return;
      }
    }
  },

  // 切换显示数据列表类型：全部 or 收藏
  [TOGGLE_LIST_SHOW](state, data) {
    state.show = data.show;
  },

  // 修改笔记
  [UPDATE_NOTE](state, data) {
    state.notes.forEach((note) => {
      if (note.id === data.note.id) {
        note = data.note;
      }
    });
  },

  // 设置当前激活的笔记
  [SET_CURRENT_ACTIVE_NOTE](state, data) {
    state.activeNote = data.note;
  }
}