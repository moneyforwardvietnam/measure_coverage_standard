# frozen_string_literal: true

require 'spec_helper'
require 'ruby_rspec'

RSpec.describe RubyRspec do
  describe 'check_number' do
    it 'should return positive and even' do
      expect(RubyRspec.new.check_number(2)).to eq('Number is positive and even')
    end
  end
end
