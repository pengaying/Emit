import io from 'socket.io-client'
let socket;
export default {
    namespace: 'socketio',

    state: {
        data:null,
        default:null,
    },

    effects: {
        *update({ payload }, { put, call }) {
            // console.log('update: ', payload.name);
            yield put({
                // type: 'save',
                // payload: {
                //     data: payload.data,
                // },

            })
            
            // console.log(payload.data);
        }
    },

    reducers: {  // Reducers 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。
        // 并且，每一次的计算都应该使用immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据
        save(state, { payload }) {
            return {
                ...state,
                data: payload.data,
                default: payload.default,
            }
        },
        init(state, { payload }) {
            return {
                ...state,
                default: payload.default    
            }
        }
    },
    // polling websocket
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                console.log(location.pathname);
                socket = io.connect('http://127.0.0.1:9092/',{
                    transports: ['websocket','polling']
                })
                socket.on('connect', () => {
                    console.log('socket连接成功.');
                    dispatch({
                        type: 'save',
                        payload: {default:null }
                    });
                }); 

                socket.on('disconnect', (reason) => {
                    console.log('socket斷開連接.')
                    dispatch({
                        type: 'init',
                        payload:{
                            default:"default",
                            
                        }
                    });
                    // console.log("断开：",this.payload.default)
                })
                socket.on('messageevent', data => {
                    console.log('subscrition:',data);
                    dispatch({
                        type: 'save',
                        payload: {data:data}
                    });
                    console.log(data[0])
                })
            })
        },
    },

}