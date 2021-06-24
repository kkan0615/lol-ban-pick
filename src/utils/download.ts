import { CustomFile } from '@/types/system/file'

export const downloadFileInHTML = async (file: CustomFile, title = file.name) => {
  if (!file.href)
    return
  const objectURL = window.URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = objectURL
  link.setAttribute('download', `${title}.${file.type.split('/')[1]}` || '')
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export const downloadFileInHTMLWithBlob = async (blob: Blob, title: string, extension: string) => {
  const objectURL = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectURL
  link.setAttribute('download', `${title}.${extension}`)
  document.body.appendChild(link)
  link.click()
  link.remove()
}
