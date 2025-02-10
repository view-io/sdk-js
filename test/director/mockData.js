export const mockDirectorEmbeddingResponse = {
    Success: true,
    Model: "all-MiniLM-L6-v2",
    ApiKey: null,
    Contents: [
        "This is a sample chunk of text, hello!",
        "Oh wow, here's another chunk of text",
        "And yet again, a third chunk of text"
    ],
    Embeddings: [
        [
            -0.04482484608888626,
            0.0845416933298111,
        ]
    ]
}

export const mockDirectorEmbeddingRequest = {
    Model: "all-MiniLM-L6-v2",
    ApiKey: "",
    Contents: [
        "This is a sample chunk of text, hello!",
        "Oh wow, here's another chunk of text",
        "And yet again, a third chunk of text"
    ]
}

export const xtoken = 'mock-test-token';