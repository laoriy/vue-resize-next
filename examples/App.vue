<script lang="tsx">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
    setup() {
        const state = reactive({
            count: 0,
            show: true,
            width: 300,
        });
        const handleResize = () => {
            state.count++;
            console.log('handle');
        };
        const changeSize = () => {
            state.width = Math.round(Math.random() * 400) + 100;
        };
        return () => {
            const { count, show, width } = state;
            return (
                <div id="app">
                    <div class="counter">Resize: {count}</div>
                    <div>
                        <button
                            class="toggle"
                            onClick={() => {
                                state.show = !state.show;
                            }}
                        >
                            Toggle
                        </button>

                        <button class="change" onClick={changeSize}>
                            Change CSS size
                        </button>
                    </div>
                    {show && (
                        <div class="resized">
                            <textarea style={{ width: `${width}px` }} />
                            <vue-resize onNotify={handleResize} />
                        </div>
                    )}
                </div>
            );
        };
    },
});
</script>

<style lang="less" scoped>
@color: #42b983;
@buttonColor: #409eff;
@buttonHoverColor: #66b1ff;
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: @color;
    margin-top: 60px;
    .counter {
        font-size: 42px;
        color: @color;
    }

    .resized {
        position: relative;
        border: solid 1px @color;
        margin: 12px;
        padding: 12px;
        display: inline-block;
    }
    button {
        display: inline-block;
        line-height: 1;
        min-height: 40px;
        white-space: nowrap;
        cursor: pointer;
        border: 1px solid @buttonColor;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0 0 0 10px;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        color: #fff;
        background-color: @buttonColor;
    }
    button:hover {
        background: @buttonHoverColor;
        border-color: @buttonHoverColor;
        color: #fff;
    }
}
</style>
