"""empty message

Revision ID: 19bb09c38213
Revises: 
Create Date: 2021-09-04 07:15:40.307716

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '19bb09c38213'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tag',
    sa.Column('tag_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=64), nullable=True),
    sa.PrimaryKeyConstraint('tag_id')
    )
    op.create_table('infotag',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('tag_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['tag_id'], ['tag.tag_id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['info.info_id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('infotag')
    op.drop_table('tag')
    # ### end Alembic commands ###