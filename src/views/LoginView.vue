<template>
    <div>
        <p>로그인</p>
        <p>ID : <input type="text" v-model="id"></p>
        <p>PW : <input type="password" v-model="pwd"></p>
        <button @click="login">로그인하여 토큰 발급</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {

        data : () => ({
            id : '',
            pwd : '',
        }),

        methods : {
            ...mapActions(['setToken']),

            async login(){

                const response = await this.$api('https://api.devcury.kr/auth/user', 'POST', {
                    id : this.id,
                    pwd : this.pwd
                });

                if(response.status === 200){
                    this.setToken(response.data.token);
                    alert('토큰 발급 성공');
                }

            }
        }
    }
</script>

<style scoped>

</style>