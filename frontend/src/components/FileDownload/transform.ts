import { FileDownloadProps } from 'northants-design-system/build/library/Components/FileDownload/FileDownload.types';
import { FileDownload_files } from './__generated__/FileDownload';

export default function transform(file: FileDownload_files): FileDownloadProps {
  return {
    title: file.title,
    url: file.url,
    type: file.type,
    size: file.size,
  };
}
