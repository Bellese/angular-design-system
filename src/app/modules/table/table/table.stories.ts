import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


import { AppTableComponent } from './table.component';
import { AppTableHeaderComponent } from '../table-header/table-header.component';
import { AppTableRowComponent } from '../table-row/table-row.component';
import { AppTableDataComponent } from '../table-data/table-data.component';
import { AppTableModalComponent } from '../table-modal/table-modal.component';
import { StarComponent } from '../../star/star/star.component';
import { StarRatingComponent } from '../../star/star-rating/star-rating.component';
import { AppPaginationComponent } from '../../paging/paging.component';
import { AppButtonComponent } from '../../button/button.component';
import { AppCheckBoxComponent } from '../../check-box/check-box.component';
import { ModalService } from '../../../services/modal.service';
import { PipesModule } from '../../../pipes/pipes.module';
import { FilterPipe } from '../../../pipes/filter.pipe';

import ComponentIntroComponent from '../../../../stories/component-intro.component';
import ParametersComponent from '../../../../stories/parameters.component';
import ImportsComponent from '../../../../stories/imports.component';
import NgModuleComponent from '../../../../stories/ngmodule.component';
import { defaultProps } from '../../../../../.storybook/helpers';

// TODO: Implement modal popups
function handleEventTable(event) {
    defaultProps.handleEvent(event);
    // const modalService = new ModalService();
    // modalService.appendComponentToBody(
    //     AppTableModalComponent,
    //     event.event.target.id,
    //     'Modal Example',
    //     event.button.array,
    //     'cancelButton1'
    // );
}

const tableData = {
    'tableHeaders': [
      {
        'header': {
          'value': '',
          'prop': 'row_Header',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'Facility Rate',
          'prop': 'val1',
          'el': 'sort'
        }
      },
      {
        'header': {
          'value': 'Number of Patients',
          'prop': 'val2',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'State Rate',
          'prop': 'val3',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'National Rate',
          'prop': 'val4',
          'el': 'default'
        }
      },
      {
        'header': {
          'value': 'Top 10%',
          'prop': 'val5',
          'el': 'default'
        }
      }
    ],
    'count': 27,
    'tableRows': [
      {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2': 'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2': 'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      },
    {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2': 'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2': 'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      }, {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2': 'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2': 'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      }, {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2': 'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2': 'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      }, {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2': 'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2': 'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      }, {
        'row_Header': {
          'value': 'SEP-1',
          'el': 'button',
          'attr': 'info',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                    {
                      'heading': 'Description'
                    },
                    {
                      'paragraph': 'Severe Sepsis and Septic Shock'
                    },
                    {
                      'heading': 'Supplemental Information'
                    },
                    {
                      'hline': true
                    },
                    {
                      'heading2': 'Volume Category Reference'
                    },
                    {
                      'paragraph': 'Low: #26 min. (5)'
                    },
                    {
                      'paragraph': 'Med: #43 min. (12)'
                    },
                    {
                      'paragraph': 'High: #72 min. (8)'
                    },
                    {
                      'heading2': 'Supplemental Information Footnotes'
                    },
                    {
                      'paragraph': '( 5 ) - The number of cases/patients is too few to report a star rating.'
                    },
                    {
                      'paragraph': '( 12 ) - Data submitted were based on a sample of cases/patients.'
                    },
                    {
                      'paragraph': '( 8 ) - Results are based on a shorter time period than required.'
                    }
              ]
          }
        },
        'val1': {
          'value': '20.0000000000000000000000000000000000000000000000%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 2 ) - Data submitted were based on a sample of cases/patients.'
                },
                {
                  'paragraph': '( 3 ) - Results are based on a shorter time period than required.'
                }
              ]
          }
        },
        'val2': {
          'value': '50',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'appTableModal',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 15 ) - The number of cases/patients is too few to report a star rating.'
                }
              ]
          }
        },
        'val3': {
          'value': '22.0%',
          'el': 'button',
          'attr': 'footnote',
          'instanceRef': {
              'modal': 'AppSubmissionErrorModal',
              'array': [
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/author[1]/assignedAuthor[1]/addr[1][\'line 120 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'author',
                          'line': 116,
                          'column': 10
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedAuthor',
                          'line': 118,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 120,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    },
                    {
                      'test': '@use',
                      'id': 'a-81-7290-warning',
                      'xpathlocation': '/ClinicalDocument/legalAuthenticator[1]/assignedEntity[1]/addr[1][\'line 165 column 10\']',
                      'jsonlocation': [
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'ClinicalDocument',
                          'line': 12,
                          'column': 229
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'legalAuthenticator',
                          'line': 160,
                          'column': 22
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'assignedEntity',
                          'line': 163,
                          'column': 19
                        },
                        {
                          'namespace': 'urn:hl7-org:v3',
                          'element': 'addr',
                          'line': 165,
                          'column': 10
                        }
                      ],
                      'text': 'SHOULD contain zero or one [0..1] @use, which SHALL be selected from ValueSet PostalAddressUse urn:oid:2.16.840.1.113883.1.11.10637 STATIC 2005-05-01 (CONF:81-7290).'
                    }
              ]
          }
        },
        'val4': {
          'value': '23.0%',
          'el': 'button',
          'attr': 'footnote',
          'title': 'activate to view 23.0% supplemental information',
          'instanceRef': {
              'modal': 'App',
              'array': [
                {
                  'heading': 'Footnote(s)'
                },
                {
                  'paragraph': '( 4 ) - Data suppressed by CMS for one or more quarters.'
                },
                {
                  'paragraph': '( 5 ) - Results are not available for this reporting period.'
                }
              ]
          }
        },
        'val5': {
          'value': '12.0%',
          'el': 'button',
          'attr': 'success'
        }
      }
    ]
};

const props = {
    ...defaultProps,
    handleEventTable: handleEventTable,
    tableData,
};

storiesOf('Components|Table', module)
    .addDecorator(
        moduleMetadata({
            declarations: [
              AppTableComponent,
              AppTableHeaderComponent,
              AppTableRowComponent,
              StarComponent,
              StarRatingComponent,
              AppPaginationComponent,
              AppButtonComponent,
              AppCheckBoxComponent,
              AppTableDataComponent,
              ParametersComponent,
              ImportsComponent,
              NgModuleComponent,
              ComponentIntroComponent
            ],
            imports: [NgxPaginationModule, PipesModule, RouterModule],
            providers: [FilterPipe, ModalService]
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
          // TODO: figure out what needs to be imported
          imports: [
              {
                  modules: ['TableModule'],
                  file: '@bellese/angular-design-system',
                  ngmodule: 'imports',
              },
          ],
          parameters: [
              {
                  name: 'headers',
                  type: 'array',
                  value: 'An array of objects that define how the table header displays',
              },
              {
                  name: 'dataRows',
                  type: 'array',
                  value: 'An array of objects that define how the table data displays',
              },
              {
                  name: 'tableSummary',
                  type: 'array',
                  value: 'the 508 summary to explain the purpose and describe the table. BE DETAILED',
              },
              {
                  name: 'tableClass',
                  type: 'string',
                  value: 'A css class name to use to style the table',
              },
              {
                  name: 'index',
                  type: 'number',
                  value: 'index assigned to table',
              },
              {
                  name: 'tableTitle',
                  type: 'string',
                  value: 'This input will allow a caption to show up within the table itself giving the table a name',
              },
              {
                  name: 'paginate',
                  type: 'boolean',
                  value: 'this input will allow the option for pagination to work within the table,',
              },
              {
                  name: 'searchText',
                  type: 'string',
                  value: 'Used to return the exact row that matches a string passed to it. The search returns true if the word contains the string you pass',
              },
              {
                  name: 'starRating',
                  type: 'boolean',
                  value: 'This is specific to HQR, a way to show table ratings',
              },
             {
                  name: 'maxRows',
                  type: 'number',
                  value: 'For pagination - the maximum amount of rows on a page. Defaults to 9',
              },
              {
                  name: 'total',
                  type: 'number',
                  value: 'This is used in server side pagination, this will set the total number of rows count. Works with paginateNext.',
              },
              {
                  name: 'linearScore',
                  type: 'string',
                  value: 'A string to represent the linear score',
              },
              {
                  name: 'reportingPeriod',
                  type: 'string',
                  value: 'A string to represent the reporting period in the table header',
              },
              {
                  name: 'highlightSearch',
                  type: 'boolean',
                  value: 'A boolean to allow text to be highlighted as the searchtext is queried.',
              },
              {
                  name: 'p',
                  type: 'number',
                  value: 'When using server side paging, use this parameter to select a default page in the pager',
              },
              {
                  name: 'buttonClick',
                  type: 'function',
                  value: 'A function that executes when a button is clicked.  It recieves an event object.',
              },
              {
                  name: 'tableRowsFiltered',
                  type: 'function',
                  value: 'A function that executes when the table is filtered.  It recieves an argument that is set to the total amount of rows displayed in the table.',
              },
              {
                  name: 'paginateNext',
                  type: 'function',
                  value: 'This will return the next pagination page(ex: 1, 2, 3...)',
              },
              {
                  name: 'sortServer',
                  type: 'function',
                  value: 'A function that executes when the table is sorted.',
              },
          ],
          notes: [
            'The table is built with many features. Each table is built to call the needed components based on the data received. Every table requires 3 items to start:',
            `<ul>
                <li>headers: the column headers used in the table</li>
                <li>dataRows: the table data used in each column</li>
                <li>tableSummary: the 508 summary to explain the purpose and describe the table. BE DETAILED</li>
            </ul>`,
            'The table has been constructed to handle most cases for text overflow. We need to keep in mind that the column headers should utilize spaces or hyphens to wrap the text, the row headers should use the same format. The table data will turn into an ellipsis should the table shrink down and have text overflow. When buttons inside the data table shrink down the Asterix should still appear but there should be ellipsis where the words are. Keep in mind the Asterix is placed outside the button component so that it will always appear in a table.',
            '<h2>Required Data Structure for Table :</h2>',
            '<h3>Table Headers :</h3>',
            'The data provided to headers in the table component has to include header and prop. These two keys are used to label the table header and to put the data in the right place by the prop. prop has to match the same prop used for the data elements. If it doesn’t match the data will not show up.',
            'Include "sort" in the el property in order to enable sorting for that column. When enabled the header will render as a sortable header with the proper aria-label included and a sort indicator svg indicating ascending or descending data. If "sort" is not provided, you will just get a normal header.',
            'If you want to sort a column on load use el sort with attr set to asc or des. This will set the direction you want to load the column data filtered as.',
            'You can also do server side sorting this can be enabled by adding sortServer: true to the column that you want to sort',
            `<pre>
headers = [
  {
    "header": {
      "value": "",
      "prop": "row_Header",
      "el": "default"
    }
  },
  {
    "header": {
      "value": "Facility Rate",
      "prop": "val1",
      "el": "sort",
      "sortServer": true
    }
  },
  {
    "header": {
      "value": "Number of Patients",
      "prop": "val2",
      "el": "sort",
      "sortServer": false
    }
  }
];
            </pre>`,
            '<h3>Table Data :</h3>',
            'Table data is where the JSON structure really comes into play. The data structure has to make sure that the key value pair is really the data prop followed by an object with three parameters:',
            'value: is the actual value populated in the data cell',
            'el: what helps the user choose between elements to include in the cell (ex: link, checkbox, button and default)',
            'attr: is the class you want to pass to content to supplement the element. (ex: success and failure)',
            'href: this is used with el: link to set location of link',
            'instanceRef: this is a catch all key that is used with el: button. It passes any object back to the developer when a button is clicked. You can use this to open models, trigger alerts. All under the developers control or for their needs.',
            'disabled: use this to add the disabled attr to the element. true or false.',
            `<pre>
dataRows = [
    {
      val1: {
        value: "100%",
        el: "button",
        attr: "",
        instanceRef: {
          key: value,
          key: value
        }
      },
      val2: {
        value: "88%",
        el: "link",
        attr: "",
        href: "./location"
      },
      val3: {
        value: "1%",
        el: "default",
        attr: ""
      }
    }
  ]
            </pre>`,
            '<h3>Row Header</h3>',
            'In order to have headers that are displayed vertically within the table, set row_Header as the property that defines each row.',
            `<pre>
row_Header: {
  value: "12%",
  el: "default"
}
            </pre>`
          ]
        }
      }))
    .add('Normal', () => ({
        template: `
            <app-table
                [headers]="tableData.tableHeaders"
                [dataRows]="tableData.tableRows"
                [paginate]="true"
                [total]="tableData.count"
                [maxRows]=10
                (buttonClick)="handleEventTable($event)"
                (paginateNext)="handleEvent($event)">
            </app-table>
        `,
        props
    }));
