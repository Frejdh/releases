interface RepositoryContent {
    _links: {
        self: string;
        git: string;
        html: string;
    };

    download_url: string | null;

    git_url: string;

    html_url: string;

    name: string;

    path: string;

    sha: string;

    size: number;

    type: "dir" | "file";

    url: string;
}