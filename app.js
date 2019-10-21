new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: 0
    },
    watch: {
        valor(){
            if(this.valor == 37){
                setTimeout(() => {
                    this.valor = 0
                }, 5000)
            }
        }
    },
    methods: {
        soma(){
            this.resultado = this.valor
        }
    }
});