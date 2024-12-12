import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eventRegistration',
    title: 'Event Registration',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the Field.',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A detailed description of the Field.',
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
        description: 'Tags associated with the Field.',
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Logo related to the Field.',
      }),
      defineField({
        name: 'url',
        title: 'URL',
        type: 'url',
        description: 'External link for more details.',
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