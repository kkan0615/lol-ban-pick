import i18n from '@/locales'

export interface Feature {
  id: number
  icon: string
  title: string
  content: string
}

/**
 * Feature list for home
 */
export const featureList: Feature[] = [
  // Vite
  {
    id: 1,
    icon: 'cable',
    title: i18n.global.t('Types.Models.Views.Features.Vite.title'),
    content: i18n.global.t('Types.Models.Views.Features.Vite.content')
  },
  {
    id: 2,
    icon: 'language',
    title: i18n.global.t('Types.Models.Views.Features.Localization.title'),
    content: i18n.global.t('Types.Models.Views.Features.Localization.content')
  },
  {
    id: 3,
    icon: 'database',
    title: i18n.global.t('Types.Models.Views.Features.Pinia.title'),
    content: i18n.global.t('Types.Models.Views.Features.Pinia.content')
  },
  {
    id: 4,
    icon: 'install_mobile',
    title: i18n.global.t('Types.Models.Views.Features.PWA.title'),
    content: i18n.global.t('Types.Models.Views.Features.PWA.content')
  },
  {
    id: 5,
    icon: 'construction',
    title: i18n.global.t('Types.Models.Views.Features.Develop.title'),
    content: i18n.global.t('Types.Models.Views.Features.Develop.content')
  },
  {
    id: 6,
    icon: 'imagesearch_roller',
    title: i18n.global.t('Types.Models.Views.Features.Style.title'),
    content: i18n.global.t('Types.Models.Views.Features.Style.content')
  },
]
