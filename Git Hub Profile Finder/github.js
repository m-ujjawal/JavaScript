class GitHub {
    constructor() {
        //clientid and clientSecret is required to get the more than 100 request in an hour
        //go to https://github.com/settings/applications/new to get your clien id and secret
        this.client_id = '497110709d6740a963a4';
        this.client_secret = 'de9173c4fe48715d67c73f45a379f3b524cfb974';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        //  console.log(profileResponse);
        console.log(profileResponse);
        return {
            profile,
            repos
        }
    }
}