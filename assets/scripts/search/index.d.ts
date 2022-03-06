interface BlogSearchParams {
    pages?: string;
    terms?: Array<string>;
    range?: string;
    q?: Array<string>;
}

interface SearchResult {
    err_msg?: string;
    count?: number;
    data?: Array<{
        date: string;
        snippet: string;
        title: string;
        url: string;
    }>;
}