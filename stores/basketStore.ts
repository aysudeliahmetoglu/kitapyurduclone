import { defineStore } from "pinia";

export const usebasketStore = defineStore(
    'test',
    {
        state: () => ({
            testMessage: 'hello'
        })
    }
)