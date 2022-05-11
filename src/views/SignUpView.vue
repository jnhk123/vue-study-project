<template>
    <div>
        <p>회원가입</p>
        <p>ID : <input type="text" v-model="id"></p>
        <p>PW : <input type="password" v-model="pwd"></p>
        <p>이름 : <input type="text" v-model="name"></p>
        <button @click="signUp">가입</button>
    </div>
</template>

<script>
    export default {

        data : () => ({
            id : '',
            pwd : '',
            name : ''
        }),

        methods : {
            async signUp() {

                const response = await this.$api('https://api.devcury.kr/auth/user/new', 'POST', {
                    id : this.id,
                    pwd : this.pwd,
                    name : this.name
                });

                if(response.status === 201){
                    alert('회원가입 성공');
                }

            }
        }
    }
</script>

<style scoped>

</style>