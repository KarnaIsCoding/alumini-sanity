import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'studentcorner',
  title: 'Student Corner',
  type: 'document',
  fields: [
    defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: ['Student Training', 'Past Competition', 'Clubs'],
          layout: 'radio',
        },
        description: 'Type of community content.',
      }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the community event or program.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the community event or program.',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Event or program date.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Tags associated with the community event or program.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image related to the community event or program.',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'External link for more details or registration.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'type',
    },
    prepare(selection) {
      const { subtitle } = selection
      return {
        ...selection,
        subtitle: subtitle ? `${subtitle}` : 'No type provided',
      }
    },
  },
})