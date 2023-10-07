

export const getStringAfterLastSlash = (url: string): string => {
    const parts = url.split('/');
    return parts.pop() || ''; // Get the last part or return an empty string if there are no slashes
  }