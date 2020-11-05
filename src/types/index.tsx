interface IMeta {
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
}

interface IGithubReposSearchReducer {
	page: number;
	perPage: number;
	isLastPage: boolean;
	repositories: {
		total_count: number;
		incomplete_results: boolean;
		items: any;
	};
	fetchMeta: IMeta;
	loadMeta: IMeta;
}

export type { IMeta, IGithubReposSearchReducer }
