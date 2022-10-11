export default function (defaultDataVale = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataVale
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
    }
};
