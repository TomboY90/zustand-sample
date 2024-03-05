import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// for mutable
import { immer } from 'zustand/middleware/immer'

const todoStore = (set, get) => ({
  todoList: [
    { id: 1, name: 'zustand 세팅', completed: true },
    { id: 2, name: '샘플 만들기', completed: false },
    { id: 3, name: 'store 만들기', completed: false },
    { id: 4, name: 'immer 사용해보기', completed: false },
  ],
  search: '',

  getters: {
    getCompletedTodoList: () => {
      return get().todoList.filter(todo => todo.completed)
    }
  },

  actions: {
    setTodoList: (list) => {
      set({ todoList : list })
    },

    handleSearchInput: (value) => {
      set({ search: value })
    },

    handleValidateBeforeSave: () => {
      // 예를 들어, 최상위 wrapper 컴포넌트에서 하위 컴포넌트들이 작성한 데이터를 저장할 때
      console.log('어디서든 변경된 state 를 볼 수 있다!', {
        todoList: get().todoList,
        search: get().search
      })
    },

    // 2. 밑에 1번 부연설명
    // immer 는 immutable 을 관리해주는 라이브러리로
    // setState((prev) => {...prev, todoList: newList} 처럼 하지 않아도 된다!
    // 마치 vue에서 양방향 바인딩이 가능한 것 처럼 유용하게 사용할 수 있다.
    toggleTodo: (index) => {
      set((state) => {
        state.todoList[index].completed = !state.todoList[index].completed
      })
    }
  }
})

// 1. immer 를 사용함으로 얻는 이점이 상당히 크다!!
const store = immer((set, get) => todoStore(set, get))
export const TodoStore = create(devtools(store), { name: 'TodoStore' })
