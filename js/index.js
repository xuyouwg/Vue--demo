window.onload = function(){
    new Vue({
        el:'#my',
        data:{
            name:'许由务光',
            val:'',
            count:0,
            items:[
                {name:'苹果',state:false},
                {name:'香蕉',state:false},
                {name:'西瓜',state:true}],
            
        },
        mounted:function(){
            this.changeList();
        },
        methods:{
            add:function(){
                if(this.val =='') return;
                this.items.push({name:this.val,state:false});
                this.val = '';
                this.changeList();
            },
            del:function(index){
                this.items.splice(index,1);
                this.changeList();
            },
            changeList:function(){
                var _this = this;
                _this.count = 0;
                _this.count =this.items.filter(function(x){return !x.state}).length;
                // this.items.forEach(function(element,index){
                //     if(!element.state){
                //         _this.count++;
                //     }
                // })
            }
        },
        filters:{
            stateFilter:function(type){
                switch(type){
                    case true:
                        return '已采购';
                    case false:
                        return '未采购';
                    default:
                        return '未采购';
                }
            }
        }
    })
}
