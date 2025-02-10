import { http, HttpResponse } from 'msw';
import { mockEndpoint } from '../setupTest';

export const handlers = [
    http.head(`${mockEndpoint}`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/config`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/config`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/storage-rest`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/vector`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/processor`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/assistant`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/orchestrator`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/crawler`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/lexi`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/embeddings`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),

    http.head(`${mockEndpoint}healthcheck/director`, ({ request, params, cookies }) => {
        return HttpResponse.text('true');
    }),
]