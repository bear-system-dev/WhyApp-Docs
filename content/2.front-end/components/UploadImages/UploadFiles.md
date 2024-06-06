# **Componente UploadFiles**
O componente UploadFiles é uma interface de usuário para compartilhar arquivos, como fotos, vídeos, documentos e figurinhas. Ele utiliza o componente Upload da biblioteca antd para gerenciar o upload de arquivos, bem como a visualização de imagens.

## **Função e Utilização**
- `isClicked`: Hooks do React para acessar o estado de SearchContext e ChatContext.
- `useEffect`: Hook do React para executar efeitos colaterais em resposta a mudanças de estado. 
- `ChangeEvent`: Tipagem de evento para manipulação de mudanças no input de busca.

## **Funções Utilizadas**
- `handleChange`: Função para atualizar a lista de arquivos carregados.
- `handlePreview`: Função para exibir a visualização da imagem quando um arquivo é clicado.
- `uploadButton`:  Componente para o botão de upload, incluindo o ícone PlusOutlined.

## **Estrutura do Código**
```javascript
import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Image, Upload, UploadFile, UploadProps } from 'antd'
import React, { useState } from 'react'
import './style.css'

const gradient = 'linear-gradient(to right, #1E2C39, #2B4156)'

const buttonStyle: React.CSSProperties = {
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  background: gradient,
}
const confirmButtonStyle: React.CSSProperties = {
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  backgroundColor: '#2B4156',
  width: '100%',
}

export const UploadFiles = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined
        style={{
          color: 'white',
        }}
      />
      <div style={{ marginTop: 8, color: 'white' }}>Upload</div>
    </button>
  )

  return (
    <Flex
      style={{
        position: 'absolute',
        backgroundColor: '#17212B',
        height: 'fit-content',
        borderRadius: '14px',
        width: 'fit-content',
        minWidth: '250px',
        bottom: '50px',
        margin: '14px',
        display: 'flex',
        flexDirection: 'column',
        padding: '14px 24px',
        gap: '14px',
      }}
    >
      {isClicked ? (
        <Flex vertical align="center" gap={24}>
          <h4
            style={{
              color: 'white',
            }}
          >
            Compartilhe arquivos ...
          </h4>
          <Flex>
            {previewImage ? (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
                alt=""
              />
            ) : (
              <Upload
                action={''}
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList?.length >= 8 ? null : uploadButton}
              </Upload>
            )}
          </Flex>
          <Flex gap={24}>
            <Button
              style={confirmButtonStyle}
              onClick={() => setIsClicked(!isClicked)}
            >
              Voltar
            </Button>
            <Button style={confirmButtonStyle}>Compartilhar</Button>
          </Flex>
        </Flex>
      ) : (
        <>
          <Button style={buttonStyle} onClick={() => setIsClicked(!isClicked)}>
            Fotos e videos
          </Button>
          <Button style={buttonStyle} onClick={() => setIsClicked(!isClicked)}>
            Documentos
          </Button>
          <Button style={buttonStyle} onClick={() => setIsClicked(!isClicked)}>
            Figurinhas
          </Button>
        </>
      )}
    </Flex>
  )
}
```

## **Exemplo de Uso**
O componente UploadFiles permite que os usuários carreguem e visualizem arquivos em uma interface amigável, com botões para selecionar diferentes tipos de arquivos. Ele utiliza o componente Upload do antd para gerenciar o upload e a visualização de arquivos, e estilos personalizados para uma aparência moderna e consistente.

## **Exemplo de Uso**
```javascript
  <UploadFiles />
```
