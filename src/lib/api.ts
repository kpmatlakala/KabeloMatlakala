// import { Project } from "./types";

// // lib/api.ts - Data fetching utilities
// interface ApiResponse<T> {
//   data: T;
//   error?: string;
// }

// export class PortfolioAPI {
//   private baseUrl: string;

//   constructor(baseUrl: string = '/api') {
//     this.baseUrl = baseUrl;
//   }

//   async fetchHeroData(): Promise<ApiResponse<any>> {
//     try {
//       const response = await fetch(`${this.baseUrl}/hero`);
//       const data = await response.json();
//       return { data };
//     } catch (error) {
//       return { data: null, error: 'Failed to fetch hero data' };
//     }
//   }

//   async fetchProjects(): Promise<ApiResponse<Project[]>> {
//     try {
//       const response = await fetch(`${this.baseUrl}/projects`);
//       const data = await response.json();
//       return { data };
//     } catch (error) {
//       return { data: [], error: 'Failed to fetch projects' };
//     }
//   }

//   async fetchExperience(): Promise<ApiResponse<any[]>> {
//     try {
//       const response = await fetch(`${this.baseUrl}/experience`);
//       const data = await response.json();
//       return { data };
//     } catch (error) {
//       return { data: [], error: 'Failed to fetch experience' };
//     }
//   }

//   async submitContact(contactData: any): Promise<ApiResponse<any>> {
//     try {
//       const response = await fetch(`${this.baseUrl}/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(contactData)
//       });
//       const data = await response.json();
//       return { data };
//     } catch (error) {
//       return { data: null, error: 'Failed to submit contact form' };
//     }
//   }
// }