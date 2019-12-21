class GitHub{
    constructor(){
        this.client_id = "5cf1a565ed3b96f7c16d"
        this.client_secret = "8718af35be21517947a83d7ceb094cc65f89ed24"
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const profile = await profileResponse.json();

        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }
}