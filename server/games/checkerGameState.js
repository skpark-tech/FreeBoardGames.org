'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.sendClick = sendClick;
exports.joinMatch = joinMatch;
exports.default = messageReducer;
// ------------------------------------
// Constants
// ------------------------------------
const CLICK = exports.CLICK = 'MATCH_ACTION_REQUEST';
const JOIN_MATCH = exports.JOIN_MATCH = 'MATCH_JOIN_REQUEST';
const MATCH_SET_STATE = exports.MATCH_SET_STATE = 'MATCH_SET_STATE';

// ------------------------------------
// Actions
// ------------------------------------
function sendClick(match_code, x, y) {
  return {
    type: CLICK,
    match_code: match_code,
    payload: { x: x,
      y: y }
  };
}

function joinMatch(match_code) {
  return {
    type: JOIN_MATCH,
    match_code: match_code
  };
}

const actions = exports.actions = {
  sendClick
};

// ------------------------------------
// FUNCTIONS
// ------------------------------------
function isValidCell(board, x, y) {
  let boardHeight = board.length;
  let boardWidth = board[0].length;
  return x >= 0 && x < boardWidth && y >= 0 && y < boardHeight;
}
function calculateFeasible(board, x, y) {
  let piece = board[y][x];
  if (!piece) return [];
  let feasible = [];
  //UP OR DOWN
  for (let directionY = -1; directionY <= 1; directionY += 2) {
    if (directionY == 1 && piece.player == 1 && !piece.double) {
      continue;
    }
    if (directionY == -1 && piece.player == 0 && !piece.double) {
      continue;
    }
    //LEFT OR RIGHT
    for (let directionX = -1; directionX <= 1; directionX += 2) {
      //WALK
      if (isValidCell(board, x + directionX, y + directionY) && !board[y + directionY][x + directionX]) {
        feasible.push({ x: x + directionX, y: y + directionY, movement: 'WALK',
          from: { x: x, y: y } });
      }
      //EAT
      if (isValidCell(board, x + directionX, y + directionY) && isValidCell(board, x + 2 * directionX, y + 2 * directionY) && board[y + directionY][x + directionX] && board[y + directionY][x + directionX].player != piece.player && !board[y + 2 * directionY][x + 2 * directionX]) {
        feasible.push({ movement: 'EAT',
          x: x + 2 * directionX, y: y + 2 * directionY,
          eaten: { x: x + directionX, y: y + directionY },
          from: { x: x, y: y } });
      }
    }
  }
  return feasible;
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MATCH_SET_STATE]: (state, action) => {
    return _extends({}, action.payload);
  },
  [CLICK]: (state, action) => {
    let x = action.payload.x;
    let y = action.payload.y;
    if (state.feasible) {
      for (var i = 0; i < state.feasible.length; i++) {
        let f = state.feasible[i];
        if (f.x == x && f.y == y) {
          if (f.movement == 'WALK') {
            state.board[y][x] = state.board[f.from.y][f.from.x];
            state.board[f.from.y][f.from.x] = null;
          } else if (f.movement = 'EAT') {
            state.board[y][x] = state.board[f.from.y][f.from.x];
            state.board[f.from.y][f.from.x] = null;
            state.board[f.eaten.y][f.eaten.x] = null;
          }
          if ((y == 0 || y == state.board.length - 1) && !state.board[y][x].double) {
            state.board[y][x].double = true;
          }
          break;
        }
      }
      return _extends({}, state, {
        selected: null,
        feasible: null
      });
    } else if (state.selected && state.selected.x == x && state.selected.y == y) {
      return _extends({}, state, {
        selected: null,
        feasible: null
      });
    } else {
      let feasible = calculateFeasible(state.board, x, y);
      if (feasible.length > 0) {
        return _extends({}, state, {
          feasible: feasible,
          selected: { x: x, y: y }
        });
      }
    }
    return state;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { board: [[{ player: 0, key: 0 }, null, { player: 0, key: 1 }, null, { player: 0, key: 2 }, null, { player: 0, key: 3 }, null], [null, { player: 0, key: 4 }, null, { player: 0, key: 5 }, null, { player: 0, key: 6 }, null, { player: 0, key: 7 }], [{ player: 0, key: 8 }, null, { player: 0, key: 9 }, null, { player: 0, key: 10 }, null, { player: 0, key: 11 }, null], [null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null], [null, { player: 1, key: 12 }, null, { player: 1, key: 13 }, null, { player: 1, key: 14 }, null, { player: 1, key: 15 }], [{ player: 1, key: 16 }, null, { player: 1, key: 17 }, null, { player: 1, key: 18 }, null, { player: 1, key: 19 }, null], [null, { player: 1, key: 20 }, null, { player: 1, key: 21 }, null, { player: 1, key: 22 }, null, { player: 1, key: 23 }]],
  loading: true,
  match_code: null,
  selected: null,
  feasible: null };
function messageReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
