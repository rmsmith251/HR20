new Vue({
    el:'#vue',
    data: {
        name: '',
        greeting: '',
        health: 100,
        ended: false
    },
    methods: {
        greet: function() {

            this.name = "Hi, "
            this.greeting = this.greeting.concat(this.name, "!")
            return 'Hello' + this.name + ', thanks for stopping by!';
        }

        punch: function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    }
});