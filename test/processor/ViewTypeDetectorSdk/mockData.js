import { DocumentTypeEnum } from '../../../src/enums/DocumentTypeEnum';

export const mockData = new Uint8Array([
  0x25,
  0x50,
  0x44,
  0x46, // PDF magic numbers
  0x2d,
  0x31,
  0x2e,
  0x34, // Version
]);

export const mockTypeDetectorResponse = {
  mimeType: 'application/pdf',
  extension: 'pdf',
  type: DocumentTypeEnum.PDF,
  metadata: {
    guid: 'default',
    contentType: 'application/pdf',
    contentLength: 1024,
    processingTime: 0.5,
    timestamp: '2024-03-20T10:34:56.456Z',
  },
  success: true,
  error: null,
};


export const mockTypeRequest = {
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        { "value": "New", "onclick": "CreateNewDoc()" },
        { "value": "Open", "onclick": "OpenDoc()" },
        { "value": "Close", "onclick": "CloseDoc()" }
      ]
    }
  }
}

export const mockTypeResponse = {
  "MimeType": "application/json",
  "Extension": "json",
  "Type": "Json"
}