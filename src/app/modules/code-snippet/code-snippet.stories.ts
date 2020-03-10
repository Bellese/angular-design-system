// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { CodeSnippetModule } from './code-snippet.module';

// Models
import { CodeSnippetModel, CodeSnippetContentItemModel } from './code-snippet.model';

// Misc
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const codeSnippetModel = new CodeSnippetModel({
    label: 'XPath',
    contentItems: [
        new CodeSnippetContentItemModel({content: '|- ClinicalDocument'}),
        new CodeSnippetContentItemModel({content: ' |- component[1]'}),
        new CodeSnippetContentItemModel({content: '  |- structuredBody[1]'}),
        new CodeSnippetContentItemModel({content: '   |- component[3]'}),
        new CodeSnippetContentItemModel({content: '    |- section[1]'}),
        new CodeSnippetContentItemModel({content: '     |- entry[3]'}),
        new CodeSnippetContentItemModel({content: '      |- act[1]'}),
        new CodeSnippetContentItemModel({content: '       |- entryRelationship[1]'}),
        new CodeSnippetContentItemModel({content: '        |- substanceAdministration[1]', lineNumber: 450, className: 'ds-u-fill--error-lightest ds-u-color--error-dark'}),
    ],
    copyContent: `/ClinicalDocument/component[1]/structuredBody[1]/component[3]/section[1]/entry[3]/act[1]/entryRelationship[1]/substanceAdministration[1]['line 450 column 75']`,
});

const codeSnippetIconModel = new CodeSnippetModel({
    label: 'XPath',
    contentItems: [
        new CodeSnippetContentItemModel({content: '|- ClinicalDocument'}),
        new CodeSnippetContentItemModel({content: ' |- component[1]'}),
        new CodeSnippetContentItemModel({content: '  |- structuredBody[1]'}),
        new CodeSnippetContentItemModel({content: '   |- component[3]'}),
        new CodeSnippetContentItemModel({content: '    |- section[1]'}),
        new CodeSnippetContentItemModel({content: '     |- entry[3]'}),
        new CodeSnippetContentItemModel({content: '      |- act[1]'}),
        new CodeSnippetContentItemModel({content: '       |- entryRelationship[1]'}),
        new CodeSnippetContentItemModel({content: '        |- substanceAdministration[1]', icon: faExclamationCircle, className: 'ds-u-fill--error-lightest ds-u-color--error-dark'}),
    ],
    copyContent: `/ClinicalDocument/component[1]/structuredBody[1]/component[3]/section[1]/entry[3]/act[1]/entryRelationship[1]/substanceAdministration[1]['line 450 column 75']`,
});

const codeSnippetModelFile = new CodeSnippetModel({
    label: 'File Name',
    contentItems: [
        new CodeSnippetContentItemModel({content: 'ReallyReallyIncrediblyInsanelyLongVeryVeryVeryLongReallyReallyIncrediblyInsanelyLongVeryVeryVeryLongFilename.zip'}),
    ],
    copyLinkDisplay: false,
});

const props = {
    ...defaultProps,
    codeSnippetModel,
    codeSnippetModelFile,
    codeSnippetIconModel,
};

storiesOf('Components|Code Snippet', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                CodeSnippetModule
            ],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['CodeSnippetModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'codeSnippetModel',
                    type: 'CodeSnippetModel',
                    // TODO: document structure of the objects
                    value: 'Use this to override the component\'s default settings.',
                },
            ],
            notes: [
                'Expected format for \'codeSnippetModel\':',
                `<pre>
codeSnippetModel = new CodeSnippetModel({
    id: 'code_snippet',
    label: 'XPath',
    contentItems: [
        new CodeSnippetContentItemModel({content: '|- ClinicalDocument'}),
        new CodeSnippetContentItemModel({content: ' |- component[1]'}),
        new CodeSnippetContentItemModel({content: '  |- structuredBody[1]'}),
        new CodeSnippetContentItemModel({content: '   |- component[3]'}),
        new CodeSnippetContentItemModel({content: '    |- section[1]'}),
        new CodeSnippetContentItemModel({content: '     |- entry[3]'}),
        new CodeSnippetContentItemModel({content: '      |- act[1]'}),
        new CodeSnippetContentItemModel({content: '       |- entryRelationship[1]'}),
        new CodeSnippetContentItemModel({content: '        |- substanceAdministration[1]', lineNumber: 450, className: 'ds-u-fill--error-lightest ds-u-color--error-dark'}),
    ],
    copyLinkDisplay: true,
    copyLinkLabel: 'Copy to Clipboard',
    copyLinkAriaLabel: 'Activate enter key to copy to clipboard',
    copyContent: "/ClinicalDocument/component[1]/structuredBody[1]/component[3]/section[1]/entry[3]/act[1]/entryRelationship[1]/substanceAdministration[1]['line 450 column 75']",
    dataAutoId = 'code_snippet';
});
                </pre>`,
                'Expected format for \'codeSnippetContentItemModel\':',
                `<pre>
codeSnippetContentItemModel = new CodeSnippetContentItemModel({
    className: 'ds-u-fill--error-lightest ds-u-color--error-dark',
    lineNumber: 450,
    icon: faExclamationCircle,
    content: '        |- substanceAdministration[1]';
});
                </pre>`,
                'When using the icon option, you must first import the specifc font awesome icon. Example:',
                `<pre>
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
                </pre>`,
                'If both lineNumber and icon are specified, lineNumber will take precendence.  '
            ]
        }
    }))
    .add('XPath', () => ({
        template: `
            <app-code-snippet
                [codeSnippetModel] = 'codeSnippetModel'>
            </app-code-snippet>
        `,
        props: props
    }))
    .add('XPath with icon', () => ({
        template: `
            <app-code-snippet
                [codeSnippetModel] = 'codeSnippetIconModel'>
            </app-code-snippet>
        `,
        props: props
    }))
    .add('Filename', () => ({
        template: `
            <app-code-snippet
                [codeSnippetModel] = 'codeSnippetModelFile'>
            </app-code-snippet>
        `,
        props: props
    }));
