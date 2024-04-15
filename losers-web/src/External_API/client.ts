import axios from "axios";
const BASE_API = process.env.REACT_APP_EXTERNAL_API_BASE
const SERVER_BASE_API = process.env.REACT_APP_API_BASE
const REPO_API = `${BASE_API}/repos`
const PROJECT_API = `${SERVER_BASE_API}/api/projects`

export interface Repository {
    id?: number;
    name?: string;
    full_name?: string;
    owner?: {
        login?: string;
        id?: number;
        avatar_url?: string;
    };
    description?: string;
    visibility?:string;
    html_url?:string,
}


// this is for getting a repo
export const getRepo = async (owner:string, repo:string) => {
    const response = await axios.get<Repository>(`${REPO_API}/${owner}/${repo}`)
    return response
};

// if we are adding stuff to our server...
export const uploadToServer = async (owner:string, repo:string) => {
    const response = await axios.get<Repository>(`${REPO_API}/${owner}/${repo}`)
    const response_from_server = await axios.post<Repository>(`${PROJECT_API}`,response)
    return response_from_server
};