cc.Class({
    extends: cc.Component,

    properties: {
        text : {
            default : 'hello'
        }
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var text = this.text;
        this.node.on("click", function(){
            //here `this` is replaced by `this.node` actually
            //so we should stor `this.text` before this function
            alert(text);
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
