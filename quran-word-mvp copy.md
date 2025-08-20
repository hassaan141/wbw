# Quran Word-by-Word MVP

## Goal
Ship a JavaScript React Native app with Supabase Auth. Use Supabase Edge Functions as the backend. The backend gets an OAuth2 token from Quran Foundation, then fetches data and returns a small, stable shape to the app.

---

## Tech Stack
- React Native with Expo, JavaScript
- NativeWind for styling
- Supabase Auth and Database
- Supabase Edge Functions as backend
- Quran Foundation API for content

---

## High Level Flow
1. User signs in with Supabase.
2. App calls your Edge Functions with the user JWT.
3. Function validates JWT.
4. Function gets an OAuth2 access token from Quran Foundation.
5. Function requests data from Quran Foundation.
6. Function normalizes and returns the response.
7. App shows data. App stores progress in Supabase.

---

## Repo Structure
- quran-word-mvp  
  - app  
  - supabase  
    - functions  
      - surahs  
      - verses  
      - w2w  
      - shared  
    - migrations  
  - README.md  
  - .env.example  

---

## App Structure
- app  
  - app.json  
  - babel.config.js  
  - tailwind.config.js  
  - package.json  
  - index.js  
  - src  
    - App.js  
    - navigation  
      - RootNavigator.js  
    - supabase  
      - client.js  
    - lib  
      - api.js  
      - storage.js  
    - hooks  
      - useAuth.js  
      - useProgress.js  
    - utils  
      - shuffle.js  
    - components  
      - SurahCard.js  
      - VerseRow.js  
      - Loading.js  
    - screens  
      - AuthSignInScreen.js  
      - MainScreen.js  
      - VerseListScreen.js  
      - PracticeScreen.js  
      - ProfileScreen.js  

### App Responsibilities
- AuthSignInScreen  
  Email and password sign in with Supabase.
- MainScreen  
  Loads surah list from the backend. Opens Profile.
- VerseListScreen  
  Lists ayah numbers for a surah.
- PracticeScreen  
  Runs the word quiz for one ayah. One Arabic token per step. Four English choices.
- ProfileScreen  
  Sign out. Room for stats.
- useAuth  
  Tracks Supabase session.
- useProgress  
  Saves local progress. Upserts verse completion to Supabase.
- api  
  Calls Edge Functions. Sends Supabase JWT in the Authorization header.
- storage  
  AsyncStorage helpers for local cache.

---

## Backend Structure (Supabase Edge Functions)
- supabase  
  - functions  
    - shared  
      - authGuard  
      - oauthClient  
      - cache  
      - normalize  
    - surahs  
    - verses  
    - w2w  
  - migrations  
    - progress table  
    - RLS policies  

### Backend Responsibilities
- shared/authGuard  
  Validates Supabase user JWT. Blocks anonymous calls.
- shared/oauthClient  
  Uses Client Credentials to get and cache Quran Foundation access tokens.
- shared/cache  
  Simple in-memory cache with TTL. Per function instance.
- shared/normalize  
  Maps provider fields to a small app shape.

---

## Edge Function Endpoints

### surahs
- Input  
  None.
- Output  
  Array of surahs with fields  
  - number  
  - name_en  
  - ayah_count
- Cache  
  6 hours.

### verses
- Input  
  surah as an integer.
- Output  
  Array like [1, 2, 3].
- Cache  
  6 hours per surah.

### w2w
- Input  
  surah as an integer, ayah as an integer.
- Output  
  Object with  
  - surah  
  - ayah  
  - words, array of  
    - ar  
    - en
- Cache  
  5 minutes per surah and ayah.

### Common Rules
- Require valid Supabase JWT.
- Validate inputs.
- Return tight payloads.
- Handle token refresh on expiry.

---

## Environment Variables

### App (.env or Expo config)
- EXPO_PUBLIC_SUPABASE_URL  
- EXPO_PUBLIC_SUPABASE_ANON_KEY  
- EXPO_PUBLIC_APP_API_URL  

### Supabase Edge Functions
- QURAN_API_CLIENT_ID  
- QURAN_API_CLIENT_SECRET  
- QURAN_OAUTH_TOKEN_URL  
- QURAN_API_BASE  

---

## Supabase Database

### Table
- progress  
  - id, uuid  
  - user_id, uuid, references auth.users  
  - surah, int  
  - ayah, int  
  - completed, boolean  
  - accuracy, float  
  - attempts, int  
  - updated_at, timestamp

### RLS
- Enable RLS.  
- Policy: user can read and write rows where user_id equals auth.uid.

---

## Data Shapes

### Surahs
- number  
- name_en  
- ayah_count

### Verses
- [1, 2, 3, ...]

### Word by Word
- surah  
- ayah  
- words  
  - ar  
  - en

---

## MVP Checklist
- Supabase Auth works.  
- Surah list loads.  
- Verse list loads.  
- Word quiz runs.  
- Progress upserts to Supabase.  
- No secrets in the app.  
