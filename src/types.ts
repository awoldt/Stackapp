export interface _stack {
  uid: string; //the uid of an authenticated user (IMPORTANT, FOREIGN KEY)
  name: string;
  icon_url: string;
  thumbnail_url: string;
  icon_filename: string;
  thumbnail_filename: string;
  description: string;
  languages_used: string[];
  databases_used: string[] | null;
  clouds_used: string[] | null;
  frameworks_used: string[] | null;
  apis_used: string[] | null;
  github_repo_id: string | null; //the github repo connected to this stack, used to pull commit logs
  /* 
      - github_api_token_used
  
    the user with the authenticated github connection to their slack account 
    will leave their unqiue github token to each stack they include repo details on, 
    this is to improve rate limiting across entire site, 
    each stack relies on a users token instead of using a single global token
    */
  github_api_token_used: string | null;
  website_url: string | null;
  created_on: number;
  stack_id?: string; //only needed for rendering account page
}

export interface _editStackData {
  //similar to _stack interface, some differences
  name: string;
  icon_url: string;
  thumbnail_url: string;
  description: string;

  //this is where it differs from _stack
  languagesSelectedData: [string[], string[]]; //[0] is tech selected, [1] is tech not selected
  databasesSelectedData: [string[], string[]] | null;
  cloudsSelectedData: [string[], string[]] | null;
  apisSelectedData: [string[], string[]] | null;
  frameworksSelectedData: [string[], string[]] | null;

  github_repo_id: number | null; //the github repo connected to this stack, used to pull commit logs
  github_api_token_used: string | null;
  website_url: string | null;
  uid: string;
  stack_id: string;
}

export interface _userProfile {
  uid: string; //(IMPORTANT, PRIMARY KEY) uniquely identifies a user stored in database
  email: string;
  password: string;
  bio: string | null;
  username: string;
  first_name: string | null;
  last_name: string | null;
  github_access_token: string | null; //if not null, user has connected their github account to stackapp
  /* 
      github_account_id is used to keep track of all the github accounts 
      connect to stackapp accounts across entire site...
      makes sure a github account cannot be connected to more than 1 stackapp account
    */
  github_account_id: number | null;
  created_on: number;
  profile_pic: string | null;
  profile_pic_filename: string | null;
}

export interface _creator {
  //user's data who made the stack
  //used for displaying users info on stackpage

  username: string;
  profile_pic: string;
  href: string;
  first_name: string | null;
  last_name: string | null;
}

export interface _nameWithLogo {
  //structure to showcase icons with tech name on frontend
  //https://drive.google.com/file/d/1QWXCdzYtE0tVyrjxMcOLUFB1NbKcQD4K/view?usp=sharing

  name: string;
  logo_img_src: string;
}

export interface _ogMetaTags {
  title: string;
  url: string | null;
  image: string | null;
}

interface _headerTags {
  title: string;
  canonical_link: string | null;
  description: string;
  open_graph_tags: _ogMetaTags | null;
}

///////
//PAGE DATA
//////

export interface DEFAULT_PAGE_LAYOUT {
  //every page data must have these properties
  header_tags: _headerTags;
  is_signed_in?: boolean; //only needed on pages that will render different ui based on user being signed in
}

export interface __PAGEDATA_account extends DEFAULT_PAGE_LAYOUT {
  stacks_data: any[] | null;
  user_data: _userProfile | null;
  has_authenticated_github_account: boolean;
  github_client_id: string | undefined;
}

export interface _PAGEDATA_create extends DEFAULT_PAGE_LAYOUT {
  has_authenticated_github_account: boolean;
  github_client_id: string | null;
  repo_select_list: _repoSelectList[] | null | "too_many_requests";
  tech_values: _techStackValues;
}

export interface _PAGEDATA_stackpage extends DEFAULT_PAGE_LAYOUT {
  app_name: string;
  icon: string | null;
  thumbnail: string | null;
  description: string;
  is_signedin_users_stack: boolean;
  website_url: string | null;
  languages_used: _nameWithLogo[];
  databases_used: _nameWithLogo[] | null;
  clouds_used: _nameWithLogo[] | null;
  frameworks_used: _nameWithLogo[] | null;
  commit_logs: _repoCommitLogs[] | null | "too_many_requests" | "error"; //null means there is no repo associated with this stack
  apis_used: _nameWithLogo[] | null;
  creator_data: _creator; //null means error while geting creator details
  created_on: number;
  stack_id: string;
}

export interface _PAGEDATA_profile extends DEFAULT_PAGE_LAYOUT {
  user_profile_data: _userProfile | null;
  user_stacks: Partial<_stack>[] | null | 0; //0 means user does not have any stacks
  is_signed_in_users_profile: boolean;
}

export interface _PAGEDATA_editstack extends DEFAULT_PAGE_LAYOUT {
  saved_stack_data: _editStackData | null;
  repo_select_list: _repoSelectList[] | null | "too_many_requests";
  current_repo_id_selected: number | null;
  tech_values: _techStackValues;
}

export interface _PAGEDATA_editprofile extends DEFAULT_PAGE_LAYOUT {
  user_data: _userProfile | null;
  has_authenticated_github_account: boolean;
  github_client_id: string | null;
}

///////
//END PAGE DATA
//////

export interface _repoSelectList {
  name: string;
  id: number;
}

export interface _repoCommitLogs {
  message: string;
  url: string;
  sha: string;
  date_commited: string;
}

///////
//API RESPONSES
//////

//most of these are empty, but good to have them if needed in future...

export interface DEFAULT_APIRESPONSE {
  msg: string;
}
export interface _API_NEWSTACK_RESPONSE extends DEFAULT_APIRESPONSE {
  new_stack_id?: string; //will not be returned if error thrown
}

///////
//END API RESPONSES
//////

//all the tech featured in a stack
export interface _techStackValues {
  languages: string[];
  databases: string[];
  clouds: string[];
  frameworks: string[];
  apis: string[];
}
